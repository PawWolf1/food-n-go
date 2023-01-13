import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FadeLoader } from "react-spinners";
import { apiFetchHistory, apiFetchMyLists } from "../api";
import { MainBody } from "../components/MainBody";
import { OrdersHistorySub } from "../components/subScreens/OrdersHistorySub";
import { setHistory, setMyLists } from "../store/lists";
import { setLoading } from "../store/loading";
import { FlexPart } from "../style";

export const OrdersHistoryScr = () => {
  const [errors, setErrors] = useState([]);
  const { loading } = useSelector((state: any) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    apiFetchHistory()
      .then((result) => {
        if (result.history !== null) {
          console.log(result.history);
          dispatch(setHistory(result.history));
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
        <OrdersHistorySub />
      )}
    </MainBody>
  );
};
