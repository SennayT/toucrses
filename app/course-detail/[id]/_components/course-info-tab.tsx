"use client";
import { Prisma } from "@/app/generated/prisma/client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import * as React from "react";
import { SanitizedText } from "@/app/_components/SanitizedText";

interface Props {
  courseData: Prisma.CourseGetPayload<{ include: null }>;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function CourseInfoTabs({ courseData }: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Course Details" {...a11yProps(0)} />
          <Tab label="Course Info" {...a11yProps(1)} />
          <Tab label="Job Roles" {...a11yProps(2)} />
          <Tab label="Trainers" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <SanitizedText text={courseData.topics} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SanitizedText text={courseData.courseInfo} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SanitizedText text={courseData.jobRoles} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <SanitizedText text={courseData.trainers} />
      </CustomTabPanel>
    </Box>
  );
}
