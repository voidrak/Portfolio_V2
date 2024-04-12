import React from "react";
import { MacbookScroll } from "../ui/mackbook-scroll";
import {cn} from "src/utils/cn.js"

const AboutSection = () => {
    return (
        <div
          className={cn(
            "p-[0.5px] rounded-[4px]",
            backlit && "bg-white/[0.2] shadow-xl shadow-white"
          )}
        >
          <div
            className={cn(
              "h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center",
              className
            )}
            style={{
              boxShadow:
                "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
            }}
          >
            <div
              className={cn(
                "text-neutral-200 text-[5px] w-full flex justify-center items-center flex-col",
                childrenClassName,
                backlit && "text-white"
              )}
            >
              {children}
            </div>
          </div>
        </div>
      );
    };
};

export default AboutSection;
