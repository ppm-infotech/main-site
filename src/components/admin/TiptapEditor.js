import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";

// import { useEffect } from "react";

function TiptapEditor({ value, onChange }) {

    const editor = useEditor({
        extensions: [
            StarterKit,

            Placeholder.configure({
                placeholder: "Write your blog content..."
            }),

            Underline,

            Link.configure({
                openOnClick: false,
                autolink: true,
                defaultProtocol: "https",
            }),

            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),

            TaskList,

            TaskItem.configure({
                nested: true,
            }),
        ],

        content: value || "",
        editorProps: {
            attributes: {
                class: "form-control",
                style: "min-height:400px; padding:15px;",
            },
        },

        onUpdate({ editor }) {
            if (onChange) {
                onChange(editor.getHTML());
            }
        }
    });

    if (!editor) return null;

    return (

        <div className="border rounded p-3">

            <div className="mb-3 d-flex flex-wrap gap-2">

                {/* Bold */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive("bold") ? "btn-primary" : "btn-outline-secondary"
                        }`}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                >
                    <b>B</b>
                </button>

                {/* Italic */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive("italic") ? "btn-primary" : "btn-outline-secondary"
                        }`}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                    <i>I</i>
                </button>

                {/* Underline */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive("underline")
                        ? "btn-primary"
                        : "btn-outline-secondary"
                        }`}
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                >
                    <u>U</u>
                </button>

                {/* Strike */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive("strike")
                        ? "btn-primary"
                        : "btn-outline-secondary"
                        }`}
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                >
                    <s>S</s>
                </button>

                {/* Paragraph */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive("paragraph")
                        ? "btn-primary"
                        : "btn-outline-secondary"
                        }`}
                    onClick={() =>
                        editor.chain().focus().setParagraph().run()
                    }
                >
                    P
                </button>


                {/* Heading 1 */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive("heading", { level: 1 })
                        ? "btn-primary"
                        : "btn-outline-secondary"
                        }`}
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 1 }).run()
                    }
                >
                    H1
                </button>

                {/* Heading 2 */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive("heading", { level: 2 })
                        ? "btn-primary"
                        : "btn-outline-secondary"
                        }`}
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                >
                    H2
                </button>

                {/* Heading 3 */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive("heading", { level: 3 })
                        ? "btn-primary"
                        : "btn-outline-secondary"
                        }`}
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 3 }).run()
                    }
                >
                    H3
                </button>

                {/* Bullet List */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive("bulletList")
                        ? "btn-primary"
                        : "btn-outline-secondary"
                        }`}
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                >
                    • List
                </button>

                {/* Ordered List */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive("orderedList")
                        ? "btn-primary"
                        : "btn-outline-secondary"
                        }`}
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                >
                    1. List
                </button>

                {/* Task List */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive("taskList")
                        ? "btn-primary"
                        : "btn-outline-secondary"
                        }`}
                    onClick={() => editor.chain().focus().toggleTaskList().run()}
                >
                    ☑ Task
                </button>

                {/* Insert Link */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive("link")
                        ? "btn-primary"
                        : "btn-outline-secondary"
                        }`}
                    onClick={() => {
                        const previousUrl = editor.getAttributes("link").href;

                        const url = window.prompt("Enter Full-URL for External Link || For Internal Links, Use Relative Paths EX- /about ", previousUrl);

                        if (url === null) return;

                        if (url === "") {
                            editor.chain().focus().unsetLink().run();
                            return;
                        }

                        editor
                            .chain()
                            .focus()
                            .setLink({
                                href: url,
                                target: "_blank",
                            })
                            .run();
                    }}
                >
                    🔗 Link
                </button>

                {/* Remove Link */}
                <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={() =>
                        editor.chain().focus().unsetLink().run()
                    }
                >
                    ❌ Link
                </button>

                {/* Align Left */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive({ textAlign: "left" })
                        ? "btn-primary"
                        : "btn-outline-secondary"
                        }`}
                    onClick={() =>
                        editor.chain().focus().setTextAlign("left").run()
                    }
                >
                    ⬅
                </button>

                {/* Align Center */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive({ textAlign: "center" })
                        ? "btn-primary"
                        : "btn-outline-secondary"
                        }`}
                    onClick={() =>
                        editor.chain().focus().setTextAlign("center").run()
                    }
                >
                    ⬌
                </button>

                {/* Align Right */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive({ textAlign: "right" })
                        ? "btn-primary"
                        : "btn-outline-secondary"
                        }`}
                    onClick={() =>
                        editor.chain().focus().setTextAlign("right").run()
                    }
                >
                    ➡
                </button>

                {/* Justify */}
                <button
                    type="button"
                    className={`btn btn-sm ${editor.isActive({ textAlign: "justify" })
                            ? "btn-primary"
                            : "btn-outline-secondary"
                        }`}
                    onClick={() =>
                        editor.chain().focus().setTextAlign("justify").run()
                    }
                >
                    ☰
                </button>

            </div>

            <EditorContent editor={editor} />

        </div>

    );

}

export default TiptapEditor;