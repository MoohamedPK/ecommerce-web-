import { TLoading } from "../../types/index";

type TLoadingProps = {
  loading: TLoading,
  error: null | string
  children: React.ReactNode
};

function Loading({loading, error, children}:TLoadingProps) {

  if (loading === "pending") {
    return <p>Loading Please Wait</p>
  } else if (loading === "failed") {
    return <p>{error}</p>
  }
  return (
    <div>{children}</div>
  )
}

export default Loading