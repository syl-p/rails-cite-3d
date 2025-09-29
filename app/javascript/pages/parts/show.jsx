import {useEffect} from "react";
import  {useThree} from "@react-three/fiber"
import * as THREE from "three";
import {Input} from "@/components/ui/input.jsx";
import {useForm} from "@inertiajs/react";
import {Button} from "@/components/ui/button.jsx";

export default function show({current_user, part, media}) {
    const {data, setData, processing, post} = useForm({
        file: null
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(`/parts/${part.id}/media`, {
            onSuccess: (data) => {
                media.push(data)
            },
            onError: (error) => {
                console.error(error)
            }
        })
    }

    const UploadForm = () => {
        return <>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <Input required
                       name="file"
                       type="file" />
                <Button type="submit" disabled={processing}>Upload !</Button>
            </form>
        </>
    }

    const ImageItem = (medium) => {
        return <>
            {medium.file_url}
        </>
    }

    return <>
        <h1 className="mb-6">{part.title}</h1>
        {part.body}
        <hr/>
        <ul>
            {media.map(medium => (<li key={medium.id}>
                {medium.id} - {medium.file_url}
            </li>))}
        </ul>
        <hr/>
        {
            current_user && <UploadForm/>
        }
    </>
}