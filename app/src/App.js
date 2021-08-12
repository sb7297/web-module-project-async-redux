import TextForm from "./components/TextForm";
import Response from "./components/Response";

function App() {
  return (<div className="w-2/3 mx-auto mt-20 space-y-4">
    <h1 className="text-center mb-4 text-3xl">Sentiment Analyzer</h1>
    <TextForm />
    <Response />
  </div>);
}

export default App;
