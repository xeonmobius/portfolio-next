"use client";
import { useParams } from "next/navigation";
import { client } from "../../lib/sanity";

interface Data {
  title: string;
  abstract: string;
  link: string;
  _id: string;
  imageUrl: string;
  body: string;
}

async function getProjects(id: string | string[]) {
  const query = `*[_type == "blog" && _id=="${id}"] {
          title,
            abstract,
            link,
            _id,
            "imageUrl": image.asset->url,
            body
        }`;

  const data = await client.fetch(query);

  return data;
}

export default async function BlogPost() {
  const { id } = useParams();
  const data: Data = await getProjects(id);
  console.log(id);
  return (
    <div>
      <p>{data.body}</p>
    </div>
  );
}
