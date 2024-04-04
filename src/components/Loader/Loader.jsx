import { Vortex } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["#33ff92", "white", "blue", "#8d9eff", "#2741d8", "purple"]}
      />
      ;
    </div>
  );
}
