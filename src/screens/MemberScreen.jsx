import '../index.css';
import SubmitButton from "../components/SubmitButton.jsx"
import VoteButton from "../components/VoteButton.jsx"

const MemberScreen = ({
  memberList,
  onSubmit,
  proposalVotes,
  proposals,
  handleVoteSelection,
  isSubmitDisabled,
  submitText,
  setProposalVoteCheck,
  hasVoted
}) => {
  const shortenAddress = (str) => {
    return str.substring(0, 6) + '...' + str.substring(str.length - 4);
  };
  
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
          <div className="voting-form">
          {proposals.map((proposal) => (
            <div key={proposal.proposalId} className="proposal-card">
              <div className="description">{proposal.description}</div>
                <div className="voting-btn-container">
                  {proposal.votes.map(({ type, label }) => (
                  <VoteButton
                    onClick={() => {
                      handleVoteSelection(proposal.proposalId, type)
                    }}
                    key={proposal.proposalId + '-' + type}
                    isSelected={proposalVotes[proposal.proposalId] == type}
                    inputId={proposal.proposalId + '-' + type}
                    proposalId={proposal.proposalId}
                    type={type}
                    label={label}
                  />
                ))}
                  </div>
                </div>
              ))}
              <div className="submitButtonContainer" >
                <SubmitButton isDisabled={isSubmitDisabled} onClick={onSubmit}>
                  {submitText}
                </SubmitButton>
              </div>
              {!hasVoted && (
              <div className="bottom-text">
                <small>
                  This will trigger multiple transactions that you will need to
                  sign.
                </small>
              </div>
              )}
            </div>
          </div>
        </div>
    </div>
  );
}
export default MemberScreen