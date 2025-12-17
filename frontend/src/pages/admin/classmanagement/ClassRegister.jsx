import React, { useEffect } from "react";
import AdminLayout from "adminLayout/AdminLayout";
import Input from "components/inputs/Input";
import { useClass } from "store/admincontext/classcontext/ClassContext";
import MainHeading from "components/headings/MainHeading";
import usePage from "store/pagelocationcontext/PageLocationContext";
import PageUrl from "components/pageurl/PageUrl";
import FormContainer from "components/form/FormContainer";
import { MdClass } from "react-icons/md";
import { LuSection } from "react-icons/lu";

const ClassRegister = () => {
  const { state, handleClassChange, handleClassRegister } = useClass();

  const { handlePageUrl, pageUrl } = usePage();

  useEffect(() => {
    handlePageUrl();
  }, []);

  return (
    <AdminLayout>
      <div className="flex justify-center">
        <div className="w-full bg-white rounded-sm shadow-sm border overflow-hidden p-1">
          <PageUrl pageUrl={pageUrl} />
          {/* Header */}
          <MainHeading
            title="REGISTER A NEW CLASS"
            path="/admin/class-management"
            btnTitle="Class List"
          />

          {/* Form Body */}
          <FormContainer onSubmit={(e) => handleClassRegister(e)}>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Input
                  id="className"
                  icon={<MdClass />}
                  iconType="react"
                  label="Class Name"
                  type="text"
                  name="name"
                  placeholder="Enter class name"
                  onChange={handleClassChange}
                  value={state.register.name}
                />

                <Input
                  id="sectionName"
                  iconType="react"
                  icon={<LuSection />}
                  label="Section Name"
                  type="text"
                  name="section"
                  placeholder="Enter section name"
                  value={state.register.section}
                  onChange={handleClassChange}
                />
              </div>
            </div>
          </FormContainer>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ClassRegister;
