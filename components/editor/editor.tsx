'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
const Editor = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextStyle, // Enables text style customization
     
        ],
        content: '<p>Hello World! 🌎️</p>',
    });

    return (
        <div className="editor-container border p-4 rounded-md shadow-md bg-white">
            <div className="toolbar">
                <button
                    className="btn"
                    onClick={() => editor.chain().focus().setFontFamily('Arial').run()}
                >
                    Arial
                </button>
                <button
                    className="btn"
                    onClick={() => editor.chain().focus().setFontFamily('Times New Roman').run()}
                >
                    Times New Roman
                </button>
                <button
                    className="btn"
                    onClick={() => editor.chain().focus().setFontSize('24px').run()}
                >
                    Font Size 24px
                </button>
            </div>
            <EditorContent
                editor={editor}
                className="editor-content focus:outline-none text-gray-700"
            />
        </div>
    );
};

export default Editor;
