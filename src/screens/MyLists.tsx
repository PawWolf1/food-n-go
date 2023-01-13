import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FadeLoader } from "react-spinners";
import {
  apiFetchFood,
  apiFetchMyLists,
  apiFetchMyListsDelete,
  apiFetchMyListsSend,
} from "../api";
import { MainBody } from "../components/MainBody";
import { MyListsSub } from "../components/subScreens/MyListsSub";
import { setFood } from "../store/food";
import { setMyLists } from "../store/lists";
import { setLoading } from "../store/loading";
import { FlexPart } from "../style";

export const MyListsScr = () => {
  const [errors, setErrors] = useState([]);
  const { loading } = useSelector((state: any) => state.loading);
  const { cart } = useSelector((state: any) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    apiFetchMyLists()
      // apiFetchMyListsDelete(12)
      // apiFetchMyListsSend({ title: "xD", food: cart, id: 13 })
      .then((result) => {
        if (result !== null) {
          dispatch(setMyLists(result.myLists));
          // dispatch(reset());
        }
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 1000);
      })
      .catch((e) => setErrors(e));
  }, []);
  return (
    <MainBody>
      {loading ? (
        <FlexPart theme={1}>
          <FadeLoader color="#36d7b7" />
        </FlexPart>
      ) : (
        <MyListsSub />
      )}
    </MainBody>
  );
};
