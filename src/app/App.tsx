import React from "react";
import Counter from "../features/counter";
import Layout from "../components/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <Counter />
    </Layout>
  );
};

export default App;
