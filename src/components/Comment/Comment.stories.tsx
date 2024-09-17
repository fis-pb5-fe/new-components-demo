import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";
import { Story } from "@storybook/react";
import React from "react";
import { ModelFilter } from "react-3layer-common";
import { Observable, of } from "rxjs";
import Comment from "./Comment";
import { FileModel, Message } from "./Comment.model";
import dayjs from "dayjs";

const demoMessageUpdate = {
  id: 1,
  discussionId: "930cd7ca-b3b0-4105-8c82-6e45d2f64ef7",
  content: "<a>Đây là message update.</a>",
  creatorId: 10,
  createdAt: dayjs(),
  creator: {
    id: 10,
    userName: "Nguyễn Thị Hương",
    displayName: "huongnt242",
    avatar: "",
  },
};
const listMessageDemo = [
  {
    id: 1,
    discussionId: "930cd7ca-b3b0-4105-8c82-6e45d2f64ef7",
    content:
      "<a>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a>",
    creatorId: 10,
    createdAt: dayjs(),
    creator: {
      id: 10,
      userName: "Nguyễn Thị Hương",
      displayName: "huongnt242",
      avatar: "",
    },
  },
  {
    id: 2,
    discussionId: "930cd7ca-b3b0-4105-8c82-6e45d2f64ef7",
    content:
      '<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" alt="IMG"/>',
    creatorId: 11,
    createdAt: dayjs(),
    creator: {
      id: 11,
      userName: "Nguyễn Thị Hồng Uyên",
      displayName: "uyennth6",
      avatar:
        "https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg",
    },
  },
  //   {
  //     id: 3,
  //     discussionId: "930cd7ca-b3b0-4105-8c82-6e45d2f64ef7",
  //     content:
  //       "<a>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a>",
  //     creatorId: 11,
  //     createdAt: dayjs(),
  //     creator: {
  //       id: 11,
  //       userName: "Nguyễn Thị Hồng Uyên",
  //       displayName: "uyennth6",
  //       avatar:
  //         "https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg",
  //     },
  //   },
  //   {
  //     id: 4,
  //     discussionId: "930cd7ca-b3b0-4105-8c82-6e45d2f64ef7",
  //     content: "Lorem Ipsum is simply",
  //     creatorId: 11,
  //     createdAt: dayjs(),
  //     creator: {
  //       id: 11,
  //       userName: "Nguyễn Thị Hồng Uyên",
  //       displayName: "uyennth6",
  //       avatar:
  //         "https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg",
  //     },
  //   },
  {
    id: 5,
    discussionId: "930cd7ca-b3b0-4105-8c82-6e45d2f64ef7",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      `,
    creatorId: 10,
    createdAt: dayjs(),
    creator: {
      id: 10,
      userName: "Nguyen Thi Hương",
      displayName: "huongnt242",
      avatar: "",
    },
  },
  //   {
  //     id: 6,
  //     discussionId: "930cd7ca-b3b0-4105-8c82-6e45d2f64ef7",
  //     content: "Lorem Ipsum is simply dummy text",
  //     creatorId: 10,
  //     createdAt: dayjs(),
  //     creator: {
  //       id: 10,
  //       userName: "Nguyễn Thị Hương",
  //       displayName: "huongnt242",
  //       avatar: "",
  //     },
  //   },
];

const demoObservable = new Observable<Message[]>((observer) => {
  setTimeout(() => {
    observer.next(listMessageDemo);
    observer.complete();
  }, 1000);
});

const demoObservableUpdate = new Observable<Message>((observer) => {
  setTimeout(() => {
    observer.next(demoMessageUpdate);
    observer.complete();
  }, 1000);
});

const countObservable = new Observable<number>((observer) => {
  setTimeout(() => {
    observer.next(50);
    observer.complete();
  }, 1000);
});

const demoSearchFunc = (TModelFilter?: ModelFilter) => {
  return demoObservable;
};

const demoUpdateMessageFunc = (TModelFilter?: ModelFilter) => {
  return demoObservableUpdate;
};

const demoCountFunc = (TModelFilter?: ModelFilter) => {
  return countObservable;
};

const demoPostFunc = (Message: Message) => {
  return of(Message);
};

const demoAttachFunc = (file: File) => {
  const fileValue: FileModel = {
    id: 1,
    name: file.name,
    path: "/testpath",
  };
  return of(fileValue);
};

const demoDeleteFunc = (message: any) => {
  return of(true);
};

const userList = [
  { id: 1, name: "Nguyễn Thị Hồng Uyên", displayName: "uyennth6@fpt.com.vn" },
  { id: 2, name: "Dang Tuan Vu", displayName: "vudt19@fpt.com.vn" },
  { id: 1, name: "Bui Quang Huy", displayName: "huybq11@fpt.com.vn" },
];

const demoGetList = (value: any) => {
  return of(userList);
};

export default {
  title: "Comment",
  component: Comment,
  tags: ['autodocs'],
  subcomponents: { Comment },
  parameters: {
    controls: { expanded: true },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Description />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
  args:{
    placeholder: "Nhập bình luận...",
    titleSave: "Lưu",
    titleCancel: "Hủy",
    isShowHeader: false,
    canSend: true,
  },
  argTypes: {
    placeholder: {
    },
    titleSave: {
    },
    titleCancel: {
    },
    isShowHeader: {
    },
    canSend: {
    },
  },
};

const Template: Story = (args) => {
  return (
    <div style={{ width: "880px", maxHeight: "600px" }}>
      <Comment
        {...args}
        getMessages={demoSearchFunc}
        countMessages={demoCountFunc}
        postMessage={demoPostFunc}
        updateMessage={demoUpdateMessageFunc}
        deleteMessage={demoDeleteFunc}
        attachFile={demoAttachFunc}
        suggestList={demoGetList}
        discussionId={"cb042dd9-03bf-4218-a126-9cd7444c68e4"}
        userInfo={{
          id: 10,
          userName: "Nguyễn Thị Hương",
          displayName: "huongnt242",
          avatar: "",
        }}
      />
    </div>
  );
};

export const Default = Template.bind({});
