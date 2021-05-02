import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

type Transactions = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  created_at: string;
}

type TransactionProviderProps = {
  children: ReactNode;
}

type TransactionInput = Omit<Transactions, 'id' | 'created_at'>

type TransactionContextData = {
  transactions: Transactions[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction)
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}
