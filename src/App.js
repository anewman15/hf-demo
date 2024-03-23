import './App.css';
import { useState } from 'react';

let renderCount = 0;

function App() {
  renderCount++;

  const [formState, setFormState] = useState({
    data: {
      title: "",
      subtitle: "",
      content: "",
      category: "",
    },
    isLoading: null,
    isSuccess: null,
    errors: [],
  });

  const onSubmit = e => {
    e.preventDefault();

    const { data: { title, subtitle, content }} = formState;

    if (title && subtitle && content) {
      setFormState({
        ...formState,
        isSuccess: true,
        errors: [],
      })
    } else {
      setFormState({
        ...formState,
        errors: [new Error("Please fill all form fields")],
        isSuccess: false,
        isLoading: false,
      });
    }
  };

  // console.log(formState);

  const onChange = e => {
    setFormState({
        ...formState,
        data: {
          ...formState.data,
          [e.target.name]: e.target.value,
        }
      });
  };

  return (
  <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
      <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Create Post</h1>
      <form onSubmit={onSubmit}>
        <div className="block mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Title
          </label>
            <input
              id="title"
              name="title"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={onChange}
              value={formState?.data?.title}
              placeholder="Add title"
            />
        </div>
        <div className="block mb-4">
          <label
            htmlFor="subtitle"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Subtitle
          </label>
          <input
            id="subtitle"
            name="subtitle"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            onChange={onChange}
            value={formState?.data?.subtitle}
            placeholder="Add a subtitle"
          />
        </div>
        <div className="block mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            type="text"
            cols={40}
            rows={5}
            onChange={onChange}
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={formState?.data?.content}
            placeholder="Add content here"
          >
          </textarea>
        </div>
        <div className="my-4 text-red-400">
          {formState?.errors?.map((error) => <div>{error?.message}</div>)}
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="w-40 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Post
          </button>
          <div className="w-40 p-2 bg-red-600 text-white rounded-lg text-center">Render count: {renderCount}</div>
        </div>
      </form>
    </div>
  </div>
  );
};

export default App;
