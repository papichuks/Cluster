import { useEffect, useState } from "react";
import { CREATE_DAO_URL_SOCIALS, SELECT_TEMPLATE_URL } from "../../../utils/constants/pages";
import CustomButton from "../../common/button";
import TextAreaInput from "../../common/input/TextAreaInput";
import TextInput from "../../common/input/TextInput";
import CreateDaoHeader from "./CreateDaoheader";

const DaoInfoForm = () => {
    const [daoName, setDaoName] = useState<string>('');
    const [daoAddress, setDaoAddress] = useState<string>();
    const [daoPurpose, setDaoPurpose] = useState<string>('');
    const [daoLegalStatus, setDaoLegalStatus] = useState<string>('');
    const [daoLegalDoc, setDaoLegalDoc] = useState<string>('');
    useEffect(() => {
        setDaoAddress(`https://smart-dao.vercel.app/${daoName}`)
    }, [daoName]);
    return (
        <div className="w-full">
            <form className="w-full">
                <CreateDaoHeader header="DAO name and purpose" hasStage currentStage="1" />
                <TextInput label="DAO name:" placeholder="Enter DAO name" onChange={(e) => setDaoName(e.target.value)} value={daoName} isCompulsory />
                <TextInput label="DAO Address (auto filled):" placeholder="Enter DAO name" value={daoAddress} onChange={(e) => setDaoAddress(`smart-dao.vercel.app/${e.target.value}`)} textTransform="lowercase" readOnly isCompulsory />
                <TextAreaInput label="Purpose:" placeholder="Enter the purpose of the DAO" onChange={(e) => setDaoPurpose(e.target.value)} value={daoPurpose} />

                <CreateDaoHeader header="KYC" optional="(Optional)" currentStage="1" />

                <TextInput label="Please explain your DAO's Legal Status and Jurisdiction (if known)" placeholder="Enter Legal Status" onChange={(e) => setDaoLegalStatus(e.target.value)} value={daoLegalStatus} />
                <TextInput label="Please paste a link to a relevant document as proof of legal status" placeholder="Paste a document link" onChange={(e) => setDaoLegalDoc(e.target.value)} value={daoLegalDoc} />

                <div className="flex justify-between w-full">
                    <div className="w-2/5">
                        <CustomButton
                            borderColor="border-grey"
                            color="grey3"
                            bg="bg-none"
                            width="w-full"
                            href={SELECT_TEMPLATE_URL}
                        >
                            Back
                        </CustomButton>
                    </div>
                    <div className="w-2/5">
                        <CustomButton bg="bg-quaternary" width="w-full" href={CREATE_DAO_URL_SOCIALS} disabled={!daoName || !daoAddress || !daoPurpose}>Next</CustomButton>
                    </div>
                </div>
            </form>
        </div>
    )
};
export default DaoInfoForm;