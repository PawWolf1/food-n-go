import { MyListElementContent } from "./MyListElementContent";

export const MyListsElementBox = ({ data, type }: any) => {
  return (
    <>
      {data
        ?.map((item: any, index: number) => (
          <MyListElementContent item={item} index={index} type={type} />
        ))
        .reverse()}
    </>
  );
};
