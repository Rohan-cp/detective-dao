import '../index.css';
import SubmitButton from "../components/SubmitButton.jsx"
import VoteButton from "../components/VoteButton.jsx"

const MemberScreen = ({
  memberList,
  onSubmit,
  proposals,
  handleVoteSelection,
  isSubmitDisabled,
  submitText,
  hasVoted
}) => {
  const shortenAddress = (str) => {
    return str.substring(0, 6) + '...' + str.substring(str.length - 4);
  };
  console.log("here")
  return (
    <div className="member-page">
        <h2>DetectiveDAO Member Page</h2>
        <div>
          <div>
            <h2>Member List</h2>
            <table className="card">
              <thead>
                <tr>
                  <th>Address</th>
                  <th>Token Amount</th>
                </tr>
              </thead>
              <tbody>
                {memberList.map((member) => {
                  return (
                    <tr key={member.address}>
                      <td>{shortenAddress(member.address)}</td>
                      <td>{member.tokenAmount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <h2>Active Proposals</h2>
            <form
              onSubmit={onSubmit}
            >
              {proposals.map((proposal) => (
                <div key={proposal.proposalId} className="proposal-card">
                  <div className="description">{proposal.description}</div>
                  <div>
                    {proposal.votes.map(({ type, label }) => (
                  <VoteButton
                    onClick={() => handleVoteSelection(proposal.proposalId, type)}>
                    {<label htmlFor={proposal.proposalId + '-' + type}>
                          {label}
                    </label>}
                  </VoteButton>
                ))}
                  </div>
                </div>
              ))}
              <SubmitButton disabled={isSubmitDisabled} type="submit">
                {submitText}
              </SubmitButton>
              {!hasVoted && (
                <small>
                  This will trigger multiple transactions that you will need to
                  sign.
                </small>
              )}
            </form>
          </div>
        </div>
      </div>
  );
}
export default MemberScreen