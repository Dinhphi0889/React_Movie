import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchListCumRap } from "./duckCumRap/action";
import { AppState } from "../../../../store/type";
import { CumRapChieu, HeThongRapChieu } from "./duckCumRap/types";
import { RootState } from "../../../../store";

export default function CumRap() {
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(actFetchListCumRap());
  }, []);
  const { data } = useSelector(
    (state: RootState) => state.getListCumRapReducer
  );

  const handleCumRap = () => {
    if (data) {
      // console.log(data.cumRapChieu)
      return data.map((item, index) => {
        return item.cumRapChieu.map((itemCumRap, index) => {
          console.log(itemCumRap);
          return <div key={index}>abc</div>;
        });
      });
    }
  };

  return <div>{handleCumRap()}</div>;
}
