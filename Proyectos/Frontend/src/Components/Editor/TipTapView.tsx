
import { useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import './tiptapview.css'
import { useEffect } from 'react';

interface TipTapProps {
    value: string;
}

const TipTapView = ({ value }: TipTapProps) => {

    const editor = useEditor({
        extensions: [StarterKit.configure({
            link: {
                openOnClick: false,
                autolink: true,
            }
        })], // define your extension array
        content: value || '', // inicializa con el valor externo
        editable: false, // Modo solo lectura
    })

    // 🔹 Sincroniza cuando "value" cambia externamente (por ejemplo al editar datos guardados)
    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value, { emitUpdate: false })  // false = no empuja al history
        }
    }, [value, editor])




    return (
        <>
            <div className='view'>
                <EditorContent editor={editor} />
            </div>

        </>
    )
}

export default TipTapView