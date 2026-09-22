import SectionLayout from "../components/sections/SectionLayout";
import PrimaryButton from "../components/ui/PrimaryButton";
import { MoveRight } from "lucide-react";

const PageNotFound = () => {
    return (
        <SectionLayout class_name={"not-found"}>
            <div className="row flex flex-col gap-5 pt-40 align-middle items-center w-full">
                <div className="error-not-found-img-container flex flex-row justify-center">
                    <img src="/images/404 Page Image.png" className="not-found-img w-[350px] h-auto" alt="404 Page Image" />
                </div>
                <h6 className="gradient-text preheader-text text-center">Page Not Found</h6>
                <h2 className="w-full sm:w-[60%] text-center">Opps! The page you're looking for <span className="text-(--primary-color)">doesn't exists.</span></h2>
                <p className="text-center w-full sm:w-[60%]">The page might have been moved, deleted, or you may have mistype the URL.</p>
                <PrimaryButton 
                    buttonlabel={"Go Back Home"}
                    icon={<MoveRight />}
                    link={"/"}
                />

            </div>
        </SectionLayout>
    )
}

export default PageNotFound;