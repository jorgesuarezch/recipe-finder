import { useContext } from 'react'

export function useContextFactory<ContextType>(
  name: string,
  context: React.Context<ContextType>
) {
  return () => {
    const ctx = useContext(context)
    if (ctx === undefined) {
      throw new Error(
        `use${name}Context must be used withing a ${name}ContextProvider.`
      )
    }
    return ctx as NonNullable<ContextType>
  }
}
