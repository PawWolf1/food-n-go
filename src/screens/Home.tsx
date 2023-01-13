import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
import { apiFetchFood } from "../api";
import { MainBody } from "../components/MainBody";
import { HomeSub } from "../components/subScreens/HomeSub";
import { setFood } from "../store/food";
import { setLoading } from "../store/loading";
import { FlexPart } from "../style";

export const HomeScr = () => {
  const [errors, setErrors] = useState([]);
  const { loading } = useSelector((state: any) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    apiFetchFood()
      .then((result) => {
        if (result.food !== null) {
          dispatch(setFood(result.food));
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
        <HomeSub />
      )}
    </MainBody>
  );
};
