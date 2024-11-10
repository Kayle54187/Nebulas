import { teamMembers } from "@/constants";
import Image from "next/image";


export default function TeamSection() {

    return (

        <div className="w-[75%] mx-auto py-12 space-y-8" id="team">
            <h1 className="text-[#130D3A] text-[60px] font-[700] text-center">Our Team</h1>
            <div className="grid grid-cols-2 relative justify-around gap-y-6">
                {
                    teamMembers.map((member, index) => (
                        <div className="space-y-4" key={index}>
                            <Image src={member.image} alt={member.name} width={500} height={500} className="rounded-xl object-cover"/>
                            <div className="p-4 space-y-4">
                                <p className="text-[#161C2D] text-[14px] font-[200]">{member.role}</p>
                                <h1 className="text-[#161C2D] text-[20px] font-[400]">{member.name}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}