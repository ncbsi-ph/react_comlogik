import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import { useForm } from 'react-hook-form';
import people from '@iconify/icons-feather/user';
import calendar from '@iconify/icons-feather/calendar';
import work from '@iconify/icons-feather/briefcase';
import frown from '@iconify/icons-feather/frown';

import { Section, Grid, Column } from '../Grid';
import { Icon } from '@iconify/react';

const Job = ({
  title,
  openPositions,
  workExperience,
  description,
  requirements,
}) => {
  const env = process.env.NODE_ENV;
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    triggerValidation,
  } = useForm();

  const isPDF = (value) => {
    const type = value[0].type;
    if (type === 'application/pdf') return true;
    else return false;
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleModal = () => {
    if (isOpen) setIsOpen(false);
    else if (!isOpen) setIsOpen(true);
  };

  const onSubmit = (data, e) => {
    toBase64(data.attachment[0]).then((value) => {
      setIsSending(true);
      const _data = {
        environment: env,
        fullName: data.fullName,
        emailAddress: data.emailAddress,
        attachment: value,
        job: title,
      };
      axios
        .post(
          'https://cors-anywhere.herokuapp.com/http://40.90.179.136:8080/comlogik_api/v1/application',
          JSON.stringify(_data),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          e.target.reset();
          setIsSending(false);
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
        })
        .catch((error) => {
          setIsSending(false);
          setIsError(true);
          setTimeout(() => {
            setIsError(false);
          }, 3000);
        });
    });
  };

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={handleModal}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        className="uk-margin-auto-vertical uk-padding uk-box-shadow-medium"
        style={{
          overlay: {
            padding: '50px 30px',
            display: 'flex',
            alignItems: 'flex-start',
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 1000,
            overflowY: 'auto',
          },
          content: {
            borderRadius: '4px',
            backgroundColor: 'white',
            outline: 0,
            overflowY: 'auto',
            transform: 'translateY(0)',
            boxSizing: 'border-box',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            marginTop: 'auto',
            marginBottom: 'auto',
            margin: '0 auto',
            position: 'relative',
            width: '1000px',
            maxWidth: 'calc(100% - 0.01px)',
          },
        }}
      >
        <Grid childWidth="1-1">
          <Column>
            <h3 className="text-black">{title}</h3>
          </Column>
          <Column className="uk-margin-top">
            <Grid childWidth="auto">
              <Column className="uk-text-bold uk-flex uk-flex-middle uk-flex-center">
                <div className="uk-margin-small-right">
                  <Icon icon={people} width={24} height={24}></Icon>
                </div>
                <div>{openPositions} open position</div>
              </Column>
              <Column className="uk-text-bold uk-flex uk-flex-middle">
                <div className="uk-margin-small-right">
                  <Icon icon={work} width={24} height={24}></Icon>
                </div>
                <div>
                  Minimum of {workExperience} years work related experience
                </div>
              </Column>
            </Grid>
          </Column>
          <Column>
            <h5>Job Description</h5>
            <p>{description}</p>
          </Column>
          <Column>
            <h5>Job Requirements</h5>
            <p>{requirements}</p>
          </Column>
          <Column>
            <div className="gradient-bg-light uk-padding">
              <Grid className="uk-grid-row-small" childWidth="1-1">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Column>
                    <h3>Apply for this position</h3>
                  </Column>
                  <Column>
                    <div className="uk-flex uk-flex-column">
                      <label
                        className="uk-margin-small-bottom"
                        htmlFor="fullName"
                      >
                        Full name
                      </label>
                      <input
                        name="fullName"
                        id="fullName"
                        className="uk-input"
                        ref={register({ required: true })}
                      />
                      {errors.fullName && (
                        <span className="uk-display-block uk-text-danger uk-margin-small-top">
                          Full name is required
                        </span>
                      )}
                    </div>
                  </Column>
                  <Column className="uk-margin-top">
                    <div className="uk-flex uk-flex-column">
                      <label
                        className="uk-margin-small-bottom"
                        htmlFor="emailAddress"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="emailAddress"
                        id="emailAddress"
                        className="uk-input"
                        ref={register({
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        })}
                      />
                      {errors.emailAddress?.type === 'required' && (
                        <span className="uk-display-block uk-text-danger uk-margin-small-top">
                          Email address is required
                        </span>
                      )}
                      {errors.emailAddress?.type === 'pattern' && (
                        <span className="uk-display-block uk-text-danger uk-margin-small-top">
                          Please enter a valid email address
                        </span>
                      )}
                    </div>
                  </Column>
                  <Column className="uk-margin-top">
                    <div className="uk-flex uk-flex-column">
                      <label
                        className="uk-margin-small-bottom"
                        htmlFor="attachment"
                      >
                        Resume / CV
                      </label>
                      <div data-uk-form-custom="target: true">
                        <input
                          type="file"
                          name="attachment"
                          id="attachment"
                          ref={register({ required: true, validate: isPDF })}
                          accept="application/pdf"
                        />
                        <input
                          className="uk-input"
                          placeholder="Select file"
                          readOnly
                        />
                      </div>
                    </div>
                    {errors.attachment &&
                      errors.attachment.type === 'required' && (
                        <span className="uk-display-block uk-text-danger uk-margin-small-top">
                          Please attach your resume/CV
                        </span>
                      )}
                    {errors.attachment &&
                      errors.attachment.type === 'validate' && (
                        <span className="uk-display-block uk-text-danger uk-margin-small-top">
                          Please attach PDF files only
                        </span>
                      )}
                  </Column>
                  {isSuccess ? (
                    <Column className="uk-margin-top">
                      <div className="uk-alert-success" data-uk-alert="">
                        <a className="uk-alert-close" data-uk-close=""></a>
                        <p>Your application has been sent!</p>
                      </div>
                    </Column>
                  ) : null}
                  {isError ? (
                    <Column className="uk-margin-top">
                      <div className="uk-alert-danger" data-uk-alert="">
                        <a className="uk-alert-close" data-uk-close=""></a>
                        <p>
                          Sending of application failed. Please try again later.
                        </p>
                      </div>
                    </Column>
                  ) : null}
                  <Column>
                    <button
                      className="uk-button uk-button-primary uk-margin-top"
                      type="submit"
                      disabled={isSending ? true : false}
                    >
                      {isSending ? (
                        <div
                          className="uk-margin-small-right"
                          data-uk-spinner=""
                        ></div>
                      ) : null}
                      Submit application
                    </button>
                  </Column>
                </form>
              </Grid>
            </div>
          </Column>
        </Grid>
      </ReactModal>
      <Column>
        <Grid childWidth="1-1">
          <Column>
            <h3 className="text-black">{title}</h3>
          </Column>
          <Column className="uk-margin-top">
            <Grid childWidth="auto">
              <Column className="uk-text-bold uk-flex uk-flex-middle uk-flex-center">
                <div className="uk-margin-small-right">
                  <Icon icon={people} width={24} height={24}></Icon>
                </div>
                <div>{`${openPositions} positions`}</div>
              </Column>
              <Column className="uk-text-bold uk-flex uk-flex-middle">
                <div className="uk-margin-small-right">
                  <Icon icon={work} width={24} height={24}></Icon>
                </div>
                <div>
                  {`Minimum of ${workExperience} years work related experience`}
                </div>
              </Column>
            </Grid>
          </Column>
          <Column>
            <button
              onClick={handleModal}
              className="uk-button uk-button-primary"
            >
              View details
            </button>
          </Column>
        </Grid>
      </Column>
    </>
  );
};

const Jobs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://cors-anywhere.herokuapp.com/http://40.90.179.136:8080/comlogik_api/v1/careers')
      .then((response) => {
        const _data = [];
        response.data.data.careers.forEach((career) => {
          _data.push(career);
        });
        setData(_data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Section>
      <Grid childWidth="1-1">
        <Column className="uk-flex">
          <h2 className="uk-margin-remove">Available jobs</h2>
        </Column>
        <Column>
          <Grid childWidth="1-1">
            {data.length > 0 ? (
              data.map((career) => {
                return (
                  <Column key={career.id}>
                    <Job
                      title={career.title}
                      openPositions={career.availablePositions}
                      workExperience={career.minimumExperience}
                      description={career.description}
                      requirements={career.requirements}
                    />
                  </Column>
                );
              })
            ) : (
              <Column>
                <Icon icon={frown} width="32" height="32" className="uk-margin-small-right" />
                There are no available jobs at the moment
              </Column>
            )}
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default Jobs;
