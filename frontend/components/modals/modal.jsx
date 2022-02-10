import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BoardFormContainer from '../workspaces/sub_components/forms/create_board_form_container';
import WorkspaceFormContainer from '../workspaces/sub_components/forms/create_workspace_form_container';
import UserInviteModalContainer from './user_invite_modal_container'
// import SignupFormContainer from '../session_form/signup_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'addBoard':
      component = <BoardFormContainer />;
      break;
    case 'addWorkspace':
      component = <WorkspaceFormContainer />;
      break;
    case 'inviteUsers':
      component = <UserInviteModalContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);