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

export const TransactionContext = createContext<Transactions[]>([]);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  )
}
