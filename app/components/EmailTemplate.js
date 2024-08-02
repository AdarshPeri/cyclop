export const EmailTemplate = ({
  firstName,
  lastName,
  email,
  companyName,
  industry,
  employeeCount,
  role,
  software,
  comments = '',
  actionFrom = '',
}) => (
  <div>
    <h1>Hello from Cyclop!</h1>
    <div>
      <p>
        A visitor with the name {`${firstName}, ${lastName}`} has submitted a{' '}
        {actionFrom === 'contact'
          ? 'request to contact'
          : 'request for a Demo from'}{' '}
        Cyclop.
      </p>
      <p>
        Email: <span>{email}</span>
      </p>
      <div>
        <p>Company: {companyName || 'N/A'} </p>
        <p>Role: {role || 'N/A'}</p>
        <p>Industry: {industry || 'N/A'}</p>
        <p>Employee Count: {employeeCount || 'N/A'}</p>
      </div>
      <div>
        <p> Business Software currently being used: {software || 'N/A'}</p>
      </div>

      {comments && <p>Additional Comments: {comments}</p>}
    </div>
    <footer>
      Regards,<br></br> Cyclop.
    </footer>
  </div>
);

export default EmailTemplate;
