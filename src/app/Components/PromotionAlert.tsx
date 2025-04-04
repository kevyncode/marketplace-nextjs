import React from "react";
import styles from "@/app/Components/Styles/PromotionAlert.module.css";

export default function PromotionAlert({
  message,
}: {
  message: React.ReactNode;
}) {
  return (
    <div className="w-full bg-[#005CFF] text-white py-1 text-center overflow-hidden">
      <p
        className={`text-lg font-semibold whitespace-nowrap ${styles["animate-marquee"]}`}
      >
        {message}
      </p>
    </div>
  );
}
