
export default function PetOwnerRow({ owner, onView }) {
    return (
        <tr>
            <td style={{ fontWeight: 600 }}>{owner.name}</td>
            <td>{owner.phone}</td>
            <td>{owner.email}</td>
            <td>{owner.pets.length}</td>
            <td>
                <span className={`status-badge status-${owner.status.toLowerCase()}`}>
                    {owner.status}
                </span>
            </td>
            <td>
                <button
                    className="btn btn-primary btn-sm"
                    onClick={onView}
                >
                    View
                </button>
            </td>
        </tr>
    );
}
