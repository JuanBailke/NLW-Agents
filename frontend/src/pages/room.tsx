import { Navigate, useParams } from "react-router-dom";

type RoomParams = {
	roomId: string;
};

export function Room() {
	const params = useParams<RoomParams>();

	if (!params.roomId) {
		return <Navigate to="/" replace />; // Redirect to home if roomId is not present
	}

	return <div>Room Details {JSON.stringify(params)}</div>;
}
