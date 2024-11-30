'use client';

import React, { useState } from 'react';
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';

const DocumentForm = () => {
  const createDocument = useMutation(api.documents.createDocument);

  // State to manage form inputs
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      await createDocument({
        title: formData.title,
        description: formData.description,
        category: formData.category,
      });
      alert('Document created successfully!');
      // Optionally reset the form
      setFormData({
        title: '',
        description: '',
        category: '',
      });
    } catch (error) {
      console.error('Error creating document:', error);
      alert('Failed to create document. Please try again.');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-4 p-4 border rounded shadow">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title..."
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows={4}
            placeholder="Description..."
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Category..."
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default DocumentForm;
