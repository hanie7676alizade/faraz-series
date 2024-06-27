import React from "react";
import { Link } from "react-router-dom";

import { Text, TextVariantEnum } from "../components";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      {/* <h1 className="text-6xl font-bold mb-4">404</h1> */}
      <Text text={"404"} variant={TextVariantEnum.HEADING_1} />

      <p className="text-xl mb-8">متاسفانه صفحه مورد نظر یافت نشد</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        <Text text={"بازگشت به صفحه اصلی"} variant={TextVariantEnum.BODY_3} />
      </Link>
    </div>
  );
};

export default NotFoundPage;
