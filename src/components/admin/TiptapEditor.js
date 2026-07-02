import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function TiptapEditor({ value, onChange }) {

    const editor = useEditor({
        extensions: [StarterKit],
        content: value || "",

        onUpdate({ editor }) {
            if (onChange) {
                onChange(editor.getHTML());
            }
        }
    });

    if (!editor) return null;

    return (

        <div className="border rounded p-3">

            <div className="mb-3">

                <button
                    type="button"
                    className="btn btn-secondary btn-sm me-2"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                >
                    Bold
                </button>

                <button
                    type="button"
                    className="btn btn-secondary btn-sm me-2"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                    Italic
                </button>

                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                >
                    Bullet List
                </button>

            </div>

            <EditorContent editor={editor} />

        </div>

    );

}

export default TiptapEditor;