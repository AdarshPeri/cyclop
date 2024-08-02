export const JoinUsTemplate = ({
  firstName,
  middleName,
  lastName,
  phone,
  email,
  line1,
  line2,
  city,
  country,
  code,
}) => (
  <div>
    <h1>Hello from Cyclop!</h1>
    <div>
      <p>
        A visitor with the name {`${firstName + ' ' + middleName}, ${lastName}`}{' '}
        has submitted a request to join Cyclop.
      </p>
      <p>
        Phone: <span>{phone}</span> <br />
        <br />
        Email: <span>{email}</span>
      </p>
      <div>
        <address>
          <p>{`${line1 + ' ' + line2}`}</p>
          <p>{`${city}, ${country}, ${code}`}</p>
        </address>
      </div>

      <div>
        <p>PFA their cover letter and resume.</p>
      </div>
    </div>
    <footer>
      Regards,<br></br> Cyclop.
    </footer>
  </div>
);

export default JoinUsTemplate;
