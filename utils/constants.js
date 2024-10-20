export const TextColor = '#333333'

export const sendOtpUrl = 'https://um.p360.build:8083/v1/um/user/login'
export const verifyOtpUrl = 'https://um.p360.build:8083/v1/um/user/verify'
export const logoutUrl = 'https://um.p360.build:8083/v1/um/user/logout'

export const MDMBaseUrl = 'https://mdm.p360.build/v1/mdm'

export const MDMBaseUrlV2 = 'https://mdm.p360.build/v2/mdm'

export const PlaceRequestUrl =
  'https://procure.p360.build:8083/v1/procure/material-indent/add'

export const ordersUrl =
  'https://procure.p360.build:8083/v1/procure/material-indent/list'

export const dummyLoginInfo = {
  userId: '8143bd4a-60c1-705a-818f-ecb4faba25fa',
  successMsg: 'Successfully Verified User',
  statusCode: 'OK',
  accessToken:
    'eyJraWQiOiIrZ1hhbGhzVmtReVBFckt0T2txN1RwelVocE1FZ2ZPRjAxWlUrRUc4ZHBrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4MTQzYmQ0YS02MGMxLTcwNWEtODE4Zi1lY2I0ZmFiYTI1ZmEiLCJjb2duaXRvOmdyb3VwcyI6WyJQUk9DVVJFTUVOVF9PRl9NQVRFUklBTFMiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV82bzFWWmNsRWIiLCJjbGllbnRfaWQiOiI1aHQ0YmkzMGRqazgxbjF0bGwwZ2M4cGI1ciIsIm9yaWdpbl9qdGkiOiJlZGI1ODhkYy1jNzdkLTQwZmQtOTY5OS04MTBiZTRhNWM5ZDYiLCJldmVudF9pZCI6IjQ2ZjFmODBhLTVjODEtNGE1Ni1iMTYxLWFlOTE3ZmUzNDhjOSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3Mjk0MDY3MDgsImV4cCI6MTcyOTQ5MzEwOCwiaWF0IjoxNzI5NDA2NzA4LCJqdGkiOiI3NjNiZTIwYS0zNDAyLTQ2YjItYjE5Zi0xZTAxODc2MTMxNjgiLCJ1c2VybmFtZSI6IjgxNDNiZDRhLTYwYzEtNzA1YS04MThmLWVjYjRmYWJhMjVmYSJ9.wUHnM-_koXyhV0iA945MzIstpx9IRh-hgAyMSVebrXMU1gbeSdWMv8A7S_jIXgOjiWa3lYEYcRj2UxHjWarKz2eRT7VS6-9arTAzJ0jjUn_Db8dg2f4a4LekMZfmMoTZMVgys6Rx3NFkA0erym0XeV4NLg2uSgr-KV1DiAkbqhKg04zafsnx7GTr9i3Plt8M5eeopKtMzek6U-cSDIo5HvBvxolhCmrnXKH4KPGR0yeWRjyrNYOtMHOBTzJ1b9mv9G_YEoeA_dXT5PUc7LM9LdKE9FOmG-w68if5MhEQldPJSpSgWSGGOJPROb_4XggUey3MUBqF5CHEPNSV9vS2tQ',
  refreshToken:
    'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.SOQ0naHcCoyf4jGdG41LVMlYF0hdfLTMllA8ef7HJj4kODV1CnqsiV1Fftp_1ba708Xe0i2aurKxDVjTDQ9rW4G_E6bugMTzLnGgjNS7YsOW5PxzaTT6HDRDI2UChPQef7c7CzizJoCuG-8Ea8QjI87X84c49-V1tfO1YCst3TAij9HE8zWB9aQJuJyMKh4IQvJ4bprKQb7i9dKo51scrltdtVFFnar_O4VfEP9egfEy82HQpJFKSX2bM2SuuwMTDW9Paw6yW6LEksXRqPS1MnOiZA8NAL2g1YIgml74YBJewv7DUQbuXWCScB7RlpbSbQicP9nqJC5Cmk9h4d9YEw.3O4xegc--Jdn_Ab8.4UrVpp5Xlmv2pZY7oXKZZzZC-FMU8lJSbO4wgpFKmjASeLkogBj-HReRnBod3-iF4ZabQdLhVe_bby_sEsntNKI_noNzDO2JeEMit_eMZAuxE8NkLM0FpBvPyrS1jyCDwiAfVOSBvaMcUdMmZ3AcgBwjrATGfFOJhYqW9wsT4VUUuUMiNOkPwDJIC9cwHQ6SgiIQjC3YLx6126BR0KOn7qHFFlm-cIer9fZxp2HiB6FUumWz7cPgdcwyH-hhgqFfeeVQz2TiTsIMZcgsQuUag4jYVKJSKsNUGz00Us3IYZit5_8ukZX2WSNsX5j38N1gHZVh5Hihm0TmKEBlBittARiBnyMPmwLht4QIeengpDh_vZhpPh9v8wQSvfIYFwvw8kXy__VDKbOJnzyEJ1kJ6PFXpCjYdH6DGaQbDSIib62HN80GSoArkiWnkIUpPGtWy8CbWRMq0OK-SgOnvhbe0yBYl1SuQjYAZXhN4FPJ_MW6q1XtnDWxn8yL-JCwUm0O2rJSpgH5jeAcKIggzx7mTc88CSG17YVglum0RQxbxFp_oQSiMiAPNQOW4HfcwKdmeGmAMkOJuad-BoeC0u50RTmlC0Fx3JeAIrEnhnq5AORb_Lv3fphqN7HDanu_9uDg8vYrrMO_qx_sUwQu5LI2DiW1uw-ln1i7Mae5cgPhjXnl8ke8QiRllnS8nN20LsJ0hS4C5Cu8ViQxeU-G3j4gg_H9spyaFBpR6kAN4fGDlLo3hguK6S0O_bsXaW7NRnkASHEIMGARZ5kcAPOlrbaWKMreDwmJ_gWLyfSNoZ51PfKKTevzj9qrAHoHbl6XTasVocExIWjgp9uYHCt6MTl09W7UesswVZCpWwhCJb6B0FDRie288bceTX2FveN8jMDkaYMJXT5M7NvDuiZwtNKyII1_sKjxwIeKkwrcmvthfM-seXcUCRmiGX3qLtrCXQqYMSCoPVZ-PwUVcJdkp-hWQhC5hMQOmfbii0I0XVtDiHbR-qY2oQOWBTJc1ua4A0LVJrt7hctFLLb4mIH2lm-ZXkAVoALg2gKPLK4qqyYoF74I49BnexWp5HQF52i7659bRE8gObs73os5xuI_pFx52p0mZwjPuPvT9gh2lO6qnIIFihdpKumnUR4TxIwb8nM9hWsx_srrM2iUqMBsc68Iec9jSQ3OjCE6KoWPna-J2UswGFsf8FnJzXNTzwUa5SAI4lVa1iNWQaWUmUs2jUddLVBSQj3MHUYc9y71_rWk_6ELO47U_s8M8SPUMiSSF42oAKUKTZEQshzXlMEagdzmUJTXGDhZycBvCHTsXmnuK1wQje_ewsdfWVtq2URjzA.htMnzWebDpNNruF226mfXA',
  idToken:
    'eyJraWQiOiJoeTlRWHdDUTVZcTUzWEhxSzBsbllCR0xYMmFLQ2ZPVWx4MUExK2lpU3lZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4MTQzYmQ0YS02MGMxLTcwNWEtODE4Zi1lY2I0ZmFiYTI1ZmEiLCJjb2duaXRvOmdyb3VwcyI6WyJQUk9DVVJFTUVOVF9PRl9NQVRFUklBTFMiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV82bzFWWmNsRWIiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiODE0M2JkNGEtNjBjMS03MDVhLTgxOGYtZWNiNGZhYmEyNWZhIiwib3JpZ2luX2p0aSI6ImVkYjU4OGRjLWM3N2QtNDBmZC05Njk5LTgxMGJlNGE1YzlkNiIsImF1ZCI6IjVodDRiaTMwZGprODFuMXRsbDBnYzhwYjVyIiwiZXZlbnRfaWQiOiI0NmYxZjgwYS01YzgxLTRhNTYtYjE2MS1hZTkxN2ZlMzQ4YzkiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTcyOTQwNjcwOCwicGhvbmVfbnVtYmVyIjoiKzkxOTYyOTYyNDYxNyIsImV4cCI6MTcyOTQ5MzEwOCwiaWF0IjoxNzI5NDA2NzA4LCJqdGkiOiI3NGMzN2FjZi05OTUyLTRlNzYtODg3My0wN2I3MjQ0NWQ2M2QifQ.Fvin2uOveenDsGF9fOAQl9izSbJs6H1s1AH3U2H9Da5uNnRKpWHB_aH2rwltsdQ98762-I0lcH7NH8LMHumWBz8uKzzpsLS4tk9lqCtVAmoiKCFg8Ocmt1vz85Rep-Yc6WEMViR-GanDh6AbnSsrBMyhjLfSUAMum7WtzH_1KRfy0YQYFxchlbs1szveR9RS4FAOPRivNX1E0BV0_J2vCO1MHNcVP2qTzQFHUBz9UBWR5nPh0nR9DyuVhzcVy87xBDvjp2HyK4bvvfrKXIg2OCUCe9-QFagVqsnsGBuyYCW-smQGP6GriJBKQnwGGXDbk7vVICq5j2Vt-5I37aby1A',
  user: {
    id: 'U00000039',
    fullName: 'Saieeash',
    email: 'mahendra@piersoft.com',
    telecomCode: '+91',
    phoneNumber: '9629624617',
    username: '+919629624617',
    userId: '8143bd4a-60c1-705a-818f-ecb4faba25fa',
    pushNotificationToken: null,
    userLevel: 'PROJECTS',
    department: {
      department: 'PROCUREMENT_OF_MATERIALS',
      userRole: 'SITE_EXECUTIVE',
      projects: [
        {
          id: '1127-G',
          description: '1127-APTIDCO-GUDIWADA',
        },
        {
          id: '1127-M',
          description: '1127-APTIDCO-MACHILIPATNAM',
        },
        {
          id: '1128-K',
          description: '1128-APTIDCO-KANDUKURU',
        },
        {
          id: '1128-N',
          description: '1128-APTIDCO-NARASARAOPETA',
        },
        {
          id: '2143-10',
          description: '12PC QTRS SHIGGAON PS (RATHI H',
        },
      ],
    },
    userStatus: 'ACTIVE',
    createdBy: 'InforOS',
    updatedBy: 'InforOS',
    createdAt: '2024-10-05 09:37:01',
    lastUpdatedAt: '2024-10-05 09:37:01',
  },
  userVerified: true,
}
