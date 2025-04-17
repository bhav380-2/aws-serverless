module.exports.post = async (event, context) => {


  const response = {
    statusCode: 200,
    isBase64Encoded: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      TEST_VAR : `${process.env.TEST_VAR}`,
      TEST_VAR_FS : `${process.env.TEST_VAR_FS}`,
      DB_USERNAME : `${process.env.DB_USERNAME_PS}`,
      DB_PASSWORD : `${process.env.DB_PASSWORD_PS}`,
      DB_USERNAME_SM : `${process.env.DB_USERNAME_SM}`,
      DB_PASSWORD_SM : `${process.env.DB_PASSWORD_SM}`,
      input: event,
    }),
  };

  return response;
};
