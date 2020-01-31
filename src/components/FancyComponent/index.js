import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fancyAction } from 'component/action/FancyStuffs';
import OnlyAciveUserView from '../component/OnlyAciveUserView';
import Modal from '../component/Modal';
import { Link } from '@reach/router';

//  ------- THIS COMPONENT IS A <Layout> CHILDREN -----------

export function FancyComponent (props) {
  const {
    title,
    userName,
    message,
    isUserActive,
    fancyAction,
    media
  } = props;

  const [ openModal, isModalOpen ] = useState(false)

  function sendSomething() {
    fancyAction();
    openModal();
  }

  function activeUserView () {
    if (isUserActive) {
      return (
        <div>
          <OnlyAciveUserView />
          <button onClick={() => sendSomething()}>
            Send Something
          </button>
        </div>
      )
    }

    return null;
  }

  return (
    <>
      <section>
        <Modal visible={isModalOpen} />
        <h2>{title}</h2>
        <p>{userName}</p>
        <hr/>
        <p>{message}</p>
        { activeUserView() }

        <div>
          <Link to={media.url.fb}>Facebook</Link>
          <Link to={media.url.twt}>Twitter</Link>
          <Link to={media.url.insta}>Instagram</Link>
        </div>
      </section>
    </>
  )
}

function mapStateToProps(state) {
  const userName = state.user.name;
  const message = state.notifications.message;
  const isUserActive = state.user.isActive;
  const media = state.user.media;

  return {
    userName,
    message,
    isUserActive,
    media
  }
}

function mapDispatchToProps() {
  return { fancyAction }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FancyComponent);