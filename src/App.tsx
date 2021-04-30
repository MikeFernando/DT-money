import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionContext } from './TransactionContext';

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
    <TransactionContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleNewTransactionModalOpen} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionOpenModal}
        onRequestClose={handleNewTransactionModalClose}
      />

      <GlobalStyle />
    </TransactionContext.Provider>
  );
}

export default App;
