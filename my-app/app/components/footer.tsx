import React from "react";
import Link from "next/link";

// DATA
import footerList from "../statics/constants/footerList";

export default function footer() {
  return (
    <footer>
      {footerList.map((item, index) => (
        <div key={index}>
          <div className="footer-items">{item.title}</div>
          {item.text ? (
            <div>{item.text}</div>
          ) : item.subtitle ? (
            item.subtitle.map((subItem, subIndex) => (
              <Link
                className="footer-sub-items"
                key={subIndex}
                href={
                  index === 1
                    ? `/shop/${subItem
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace(/-&-/g, "&")}`
                    : `/${subItem
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace(/-&-/g, "&")}`
                }
              >
                {subItem}
              </Link>
            ))
          ) : (
            <></>
          )}
        </div>
      ))}
    </footer>
  );
}
