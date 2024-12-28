import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function BreadCrumbs() {
  const [currentPage, setCurrentPage] = React.useState<React.Key>("sample");

  return (
    <Breadcrumbs
      classNames={{ base: "pl-2" }}
      underline='active'
      onAction={(key) => setCurrentPage(key)}
    >
      <BreadcrumbItem key='projects' isCurrent={currentPage === "projects"}>
        Projects
      </BreadcrumbItem>
      <BreadcrumbItem key='sample' isCurrent={currentPage === "sample"}>
        Sample API
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
