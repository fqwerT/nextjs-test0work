interface PayloadProps {
  url: string;
  dispatch: any;
  action: any;
  type: string;
  revalidate: { status: boolean; delay: number };
}
export const dataFetch = async ({
  url,
  dispatch,
  action,
  type,
  revalidate,
}: PayloadProps) => {
  const { status, delay } = revalidate;
  const res = await fetch(
    url,
    status
      ? {
          next: {
            revalidate: delay,
          },
        }
      : {}
  );
  const data = await res.json();
  if (type === "set state") {
    dispatch(action(data));
  }
  if (type === "request") {
    return data;
  }
};
