import React from 'react';
import UserProfile from '../../components/user/UserProfile';

const dummyUser = {
  full_name: 'Nguyễn Văn A',
  phone_number: '0123 456 789',
  address: '123 Đường ABC, Quận 1, TP.HCM',
  avatar: 'https://i.pravatar.cc/150?img=5',
  date_of_birth: '1990-05-15',
  gender: 'Nam',
  blood_type: 'O+'
};

function UserPage() {
  return <UserProfile user={dummyUser} />;
}

export default UserPage;
