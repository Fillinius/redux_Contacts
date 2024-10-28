export const thunk = ({
  dispatch,
  getState,
}: {
  dispatch: any
  getState: () => void
}) => {
  return (next: any) => {
    return (action: any) => {
      if (typeof action === 'function') {
        action(dispatch, getState)
      } else {
        return next(action)
      }
    }
  }
}
