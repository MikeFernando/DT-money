import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')

function App() {
  const [isNewTransactionOpenModal, setIsNewTransactionOpenModal] = useState(false)

  function handleNewTransactionModalOpen() {
    setIsNewTransactionOpenModal(true)
  }

  function handleNewTransactionModalClose() {
    setIsNewTransactionOpenModal(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleNewTransactionModalOpen} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionOpenModal}
        onRequestClose={handleNewTransactionModalClose}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}

export default App;
