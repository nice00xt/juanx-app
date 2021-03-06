import React, { useState, useEffect } from 'react';
import { fancyAction } from 'component/action/FancyStuffs';
import OnlyAciveUserView from '../component/OnlyAciveUserView';
import Modal from '../component/Modal';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import { getUser } from '../actions/getUser';

//  ------- THIS COMPONENT IS A <Layout> CHILDREN -----------

export function FancyComponent (props) {
  const { title, userName, message, isUserActive, fancyAction, media } = props;
  const [ openModal, isModalOpen ] = useState(false)

  useEffect(() => {
    getUser();
  }, [])

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
          <ul className="media-list">
            <li><Link to={media.url.fb}>{media.url.name}</Link></li>
            <li><Link to={media.url.twt}>{media.url.name}</Link></li>
            <li><Link to={media.url.insta}>{media.url.name}</Link></li>
          </ul>
        </div>
      </section>
    </>
  )
}

function mapStateToProps(state) {
  const userName = state.user.name;
  const isUserActive = state.user.isActive;
  const message = state.notifications.message;
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