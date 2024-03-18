import { Card } from "antd";
import { UserPresenterProps } from "../../Entity/Entity";

const { Meta } = Card;

const UserPresenterComponent = ({ name, image }: UserPresenterProps) => {
    return (
        <>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={
                    <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                }
            >
                <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                />
            </Card>
        </>
    );
};

export default UserPresenterComponent;
