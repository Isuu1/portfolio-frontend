import { createServer, Model } from "miragejs";

createServer({
  models: {
    projects: Model,
  },

  seeds(server) {
    server.create("project", {
      title: "Games Together",
      desc: "The project aims to design, develop, and deploy a website for a specific purpose, whether it's for a business, organization, personal blog, portfolio, e-commerce, or any other purpose. The website will serve as a digital platform to provide information, engage users, and achieve specific goals.",
      imgUrl: "https://images2.imgbox.com/d4/9b/1gLx82bn_o.png",
      category: "All",
      id: "1",
    });
    server.create("project", {
      title: "Fotisu Photography",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy",
      imgUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      category: "All",
      id: "2",
    });
    server.create("project", {
      title: "Testing 1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      imgUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      category: "React",
      id: "3",
    });
    server.create("project", {
      title: "Test title",
      desc: "Some website description. Just a basic data. ",
      imgUrl:
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "React",
      id: "4",
    });
    server.create("project", {
      title: "Another world",
      desc: "Some website description. Just a basic data. dfsafsdf ",
      imgUrl:
        "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1939&q=80",
      category: "Javascript",
      id: "5",
    });
    server.create("project", {
      title: "Another for testing purposes",
      desc: "Some website description. Just a basic data. dfsafsdf ",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
      category: "Javascript",
      id: "6",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/", (schema, request) => {
      return schema.projects.all();
    });

    this.get("/:id", (schema, request) => {
      const id = request.params.id;
      return schema.projects.find(id);
    });
  },
});

// createServer({
//   routes() {
//     this.namespace = "api";

//     this.get("/", () => {
//       return {
//         movies: [
//           {
//             title: "Games Together",
//             desc: "The project aims to design, develop, and deploy a website for a specific purpose, whether it's for a business, organization, personal blog, portfolio, e-commerce, or any other purpose. The website will serve as a digital platform to provide information, engage users, and achieve specific goals.",
//             imgUrl: "https://images2.imgbox.com/d4/9b/1gLx82bn_o.png",
//             category: "All",
//             id: "1",
//           },
//           {
//             title: "Fotisu Photography",
//             desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy",
//             imgUrl:
//               "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
//             category: "All",
//             id: "2",
//           },
//           {
//             title: "Testing 1",
//             desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//             imgUrl:
//               "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
//             category: "React",
//             id: "3",
//           },
//         ],
//       };
//     });
//   },
// });
