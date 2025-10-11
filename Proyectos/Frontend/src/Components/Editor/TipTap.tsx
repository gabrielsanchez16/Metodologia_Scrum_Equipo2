
import { useEditor, EditorContent, useEditorState } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import './tiptap.css'
import Toolbar from './Toolbar';
import { useEffect } from 'react';

interface TipTapProps {
    setValue: (value: string) => void;
    value: string;
}

const TipTap = ({ setValue, value }: TipTapProps) => {

    const editor = useEditor({
        extensions: [StarterKit.configure({
            link: {
                openOnClick: false,
                autolink: true,
            }
        })], // define your extension array
        content: value || '', // inicializa con el valor externo
        onUpdate: ({ editor }) => {
            // cada vez que cambia el contenido, se guarda en el padre
            setValue(editor.getHTML())
        },
    })

    // 🔹 Sincroniza cuando "value" cambia externamente (por ejemplo al editar datos guardados)
    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value, { emitUpdate: false })  // false = no empuja al history
        }
    }, [value, editor])


    const editorState = useEditorState({
        editor,
        selector: (ctx) => {
            return {
                isBold: ctx.editor.isActive('bold'),
                isItalic: ctx.editor.isActive('italic'),
                isUnderline: ctx.editor.isActive('underline'),
                isCodeBlock: ctx.editor.isActive('codeBlock'),
                isH1: ctx.editor.isActive('heading', { level: 1 }),
                isH2: ctx.editor.isActive('heading', { level: 2 }),
                isH3: ctx.editor.isActive('heading', { level: 3 }),
                isParagraph: ctx.editor.isActive('paragraph'),
                isOrderedList: ctx.editor.isActive('orderedList'),
                isBulletList: ctx.editor.isActive('bulletList'),
                isLink: ctx.editor.isActive('link'),
            }
        }
    })

    const comandos = {
        toggleBold: () => editor.chain().focus().toggleBold().run(),
        toggleItalic: () => editor.chain().focus().toggleItalic().run(),
        toggleUnderline: () => editor.chain().focus().toggleUnderline().run(),
        toggleCodeBlock: () => editor.chain().focus().toggleCodeBlock().run(),
        toggleH1: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        toggleH2: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        toggleH3: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
        toggleParrafo: () => editor.chain().focus().setParagraph().run(),
        toggleListaOrdenada: () => editor.chain().focus().toggleOrderedList().run(),
        toggleListaPuntos: () => editor.chain().focus().toggleBulletList().run(),
        agregarLink: () => {
            const anteriorUrl = editor.getAttributes('link').href;
            const url = window.prompt('URL', anteriorUrl);
            if (url) {
                editor.chain().focus().setLink({ href: url }).run();
            }
        },
        guardarDatos: () => {
            const contenido = editor.getHTML();
            console.log(contenido);
        }
    };

    return (
        <>
            <div className='normal'>
                <Toolbar comando={comandos} editorState={editorState} />
                <EditorContent editor={editor} />
            </div>

        </>
    )
}

export default TipTap