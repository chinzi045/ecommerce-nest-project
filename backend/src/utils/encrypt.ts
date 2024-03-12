import * as bcrypt from 'bcrypt';

export const encodedPassword = async (password: string) => {
  const Salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, Salt);
};

export const Compare = async (password: string, hashPassword: string) => {
  try {
    const comparison = await bcrypt.compare(password, hashPassword);
    console.log(comparison);

    return comparison;
  } catch (error) {
    // Handle errors, such as invalid hash or other bcrypt errors
    console.error('Error comparing passwords:', error);
    return false; // Return false indicating passwords don't match
  }
};
